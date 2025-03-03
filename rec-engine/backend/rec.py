from app import PhoneAnswers, InternetAnswers, CybersecurityAnswers, BackupAnswers 

def phones_rec(user_id):
    answers = PhoneAnswers.query.filter_by(user_id=user_id).all()
    if not answers:
        return "Phones section not completed"
    # Logic

def internet_rec(user_id):
    answers = InternetAnswers.query.filter_by(user_id=user_id).all()
    if not answers:
        return "Internet section not completed"
    # Logic

def cybersecurity_rec(user_id):
    answers = CybersecurityAnswers.query.filter_by(user_id=user_id).all()
    if not answers:
        return "Cybersecurity section not completed"
    # Logic

def backup_rec(user_id):
    answers = BackupAnswers.query.filter_by(user_id=user_id).all()
    if not answers:
        return "Cybersecurity section not completed"
    # Logic
