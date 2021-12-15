# Symptom Tracker App
#### By Sarah Carter

## Description
This project is a full-stack app that can be used by patients to track any symptoms that they are having. Users will have a dashboard which shows a list of the symptoms they are tracking. They will be able to add new symptoms, edit their symptoms, and delete any symptoms.

## MVP Goal
Users will be able to add their symptoms in the form and will specify the body area, symptom, severity, a description, and the date that the symptom started. They will also be able to edit and delete symptoms.

## Bonus Features
If time permits, my goal is to integrate data from the Healthwise API into my New Symptom form. Ideally, I will be able to pull data from the API to create different symptom options the user can select from. For example, the user would be able to select from a drop down list of body parts and then based on the body part, and API call would be made to getCommonSymptoms based on that body part. The user would then be able to select their symptom to track from that list. 

## Technologies Used
- Node
- Express
- NextJS/React (possibly TypeScript)
- Emotion for styling
- [Healthwise API](https://rapidapi.com/Elyes/api/healthwise/)

## Components/ Pages
- Layout
- Edit
- New
- Show ([id])
- Index

## React Router Route Table
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | displays all symptoms (index)||
| /symptoms/:id | Show | get | shows a specific symptom (show) |
| /symptoms/new | Form | post | adds a new symptom (create) |
| /symptoms/edit/:id | Form | put | edits a symptom (update) |
| /flashcards/:id | Show | delete | deletes a symptom (destroy) |

## User Stories
As a user, I can see a list of all the symptoms I am tracking when I visit the index page. \
As a user, I can click on one of my symptoms and have it take me to a show page that displays details about the symptom. \
As a user, I can add a new symptom and see that it immediately loads on the page so that I know I successfully added a symptom. \
As a user, I can delete a symptom so I can keep my list relevant. \
As a user, I can update a symptom in case I made a typo. \

## Bonus Features


## Challenges


## Future Ideas


# Backend

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