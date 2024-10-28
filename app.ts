// Get form and input elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
const nameInput = document.getElementById('name') as HTMLInputElement | null;
const emailInput = document.getElementById('email') as HTMLInputElement | null;
const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
const profilePhotoInput = document.getElementById('profilePhoto') as HTMLInputElement | null;
const educationInput = document.getElementById('education') as HTMLTextAreaElement | null;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement | null;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;

// Get resume output element
const resumeOutput = document.getElementById('resumeOutput');