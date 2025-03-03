from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from pdf import generate_pdf, send_email_with_pdf


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///recommendation.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# User table 
class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    organization_name = db.Column(db.String(255), nullable=False)
    address_line_1 = db.Column(db.String(255), nullable=False)
    address_line_2 = db.Column(db.String(255), nullable=True)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    zip_code = db.Column(db.String(20), nullable=False)
    non_profit = db.Column(db.String(5), nullable=True)
    selected_sections = db.Column(db.String(255), nullable=True)
    projects = db.Column(db.String(500), nullable=True)
    
# Answer table
class PhoneAnswers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.String(255), nullable=False)

class InternetAnswers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.String(255), nullable=False)

class CybersecurityAnswers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.String(255), nullable=False)

class BackupAnswers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.String(255), nullable=False)

# Add user to database -- to be called on "Start Questionairre" button 
@app.route('/register', methods=['POST'])
def register_user(user_id):
    data = request.json
    user = User(
        first_name=data['first_name'],
        last_name=data['last_name'],
        phone_number=data['phone_number'],
        email=data['email'],
        organization_name=data['organization_name'],
        address_line_1=data['address_line_1'],
        address_line_2=data.get('address_line_2', None),
        city=data['city'],
        state=data['state'],
        zip_code=data['zip_code']
    )
    db.session.add(user)
    db.session.commit()

# Add user selections to user database -- to be called on "Next Section" button on general tech page
@app.route('/selections', methods=['POST'])
def selections():
    data = request.json
    user_id = data['user_id']
    selected_sections = ','.join(data.get('selected_sections', []))
    user = User.query.get(user_id)

    user.non_profit = data.get('non_profit', user.non_profit)
    user.selected_sections = selected_sections
    user.projects = data.get('projects', user.projects)

    db.session.commit()

# Submit answers -- to be called on "Next Page" and "Next Section" buttons 
@app.route('/submit', methods=['POST'])
def submit_answers():
    data = request.json
    user_id = data['user_id']
    section = data['section']
    
    answer_models = {
        'phones': PhoneAnswers,
        'internet': InternetAnswers,
        'cybersecurity': CybersecurityAnswers,
        'backup': BackupAnswers
    }
    
    if section in answer_models:
        for answer in data['answers']:
            ans = answer_models[section](user_id=user_id, question=answer['question'], answer=answer['answer'])
            db.session.add(ans)
        db.session.commit()

# generate PDF w recommendations 
@app.route('/get_recommendation/<int:user_id>', methods=['GET'])
def get_recommendation(user_id):
    user = User.query.get(user_id)
    pdf_path = generate_pdf(user_id)
    send_email_with_pdf(user, pdf_path)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
