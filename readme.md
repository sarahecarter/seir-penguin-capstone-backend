# Symptom Tracker App
#### By Sarah Carter

## Models
Symptom:
- Body Part: string
- Symptom: string
- Date Started: date
- Severity: number
- Notes: string

## Backend Route Table
| url | method | action |
|-----|--------|--------|
| /symptoms | get | gets all symptoms (index)||
| /symptoms | post | adds a new symptom (create) |
| /symptoms/:id | get | shows a specific symptom (show) |
| /symptoms/:id | put | updates a symptom (update) |
| /symptom/:id | delete | deletes a symptom (destroy) |

## Technologies and Dependencies
- Node
- Express
- MongoDB
- Mongoose
- Cors
- Dotenv