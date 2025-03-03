from rec import phones_rec, internet_rec, cybersecurity_rec, backup_rec
from app import User 
from flask_mail import Mail, Message
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import os
import app 

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Use your email provider's SMTP server
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'  # LAMB TELE EMAIL 
app.config['MAIL_PASSWORD'] = 'your-email-password'  # LAMB TELE PASSWORD 

mail = Mail(app)

# generate_pdf() calls recommendation functions and genrates a PDF 
def generate_pdf(user_id):
    user = User.query.get(user_id)
    if not user:
        return None

    # Generate recommendations
    phone_recommendation = phones_rec(user_id)
    internet_recommendation = internet_rec(user_id)
    cybersecurity_recommendation = cybersecurity_rec(user_id)
    backup_recommendation = backup_rec(user_id)

    # Set up PDF filename
    pdf_filename = f"recommendation.pdf"
    pdf_path = os.path.join(os.getcwd(), pdf_filename)

    c = canvas.Canvas(pdf_path, pagesize=letter)
    c.drawString(100, 750, f"Recommendation Report for {user.first_name} {user.last_name}")
    c.drawString(100, 730, f"Email: {user.email}")
    c.drawString(100, 710, f"Organization: {user.organization_name}")

    y_position = 690
    c.drawString(100, y_position, "-----------------------------------")
    y_position -= 20

    # Add Recommendations to PDF
    recommendations = {
        "Phones": phone_recommendation,
        "Internet": internet_recommendation,
        "Cybersecurity": cybersecurity_recommendation,
        "Backup & Disaster Recovery": backup_recommendation
    }

    for section, rec in recommendations.items():
        c.drawString(100, y_position, f"{section} Recommendation:")
        y_position -= 15
        c.drawString(120, y_position, rec)
        y_position -= 30

    c.save()
    return pdf_path

def send_email_with_pdf(user, pdf_path):
    """ Send an email with the PDF attachment """
    msg = Message("Your Custom Recommendation Report",
                  sender="your-email@gmail.com",
                  recipients=[user.email])
    msg.body = f"Hello {user.first_name},\n\nPlease find attached your recommendation report.\n\nBest,\nLamb Telecom Recommendation Engine"
    
    with open(pdf_path, "rb") as pdf:
        msg.attach(f"recommendation_{user.user_id}.pdf", "application/pdf", pdf.read())

    mail.send(msg)
    os.remove(pdf_path)  # Deletes the file after sending


