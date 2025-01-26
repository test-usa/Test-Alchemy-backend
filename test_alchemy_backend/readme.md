# Exam management System DOCS

## User Functionalities

### GET - get all users

- http://localhost:5000/api/v1/user

### POST - create user

- http://localhost:5000/api/v1/user/
- Example: {
  "firstName": "Examinee",
  "lastName": "Boy",
  "email": "examinee@gmail.com",
  "userType": "examinee",
  "img": "12321321",
  "domain":"test",
  "password": "1"
  }
