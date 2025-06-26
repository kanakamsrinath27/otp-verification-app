# OTP Verification App

![GitHub repo size](https://img.shields.io/github/repo-size/kanakamsrinath27/otp-verification-app?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/kanakamsrinath27/otp-verification-app?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/kanakamsrinath27/otp-verification-app?style=flat-square)
![GitHub license](https://img.shields.io/github/license/kanakamsrinath27/otp-verification-app?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/kanakamsrinath27/otp-verification-app?style=flat-square)

---

## Overview

The **OTP Verification App** is a simple and clean web application designed to generate and verify One-Time Passwords (OTPs) locally without any backend. It includes features like:

- OTP generation with a 4-digit code  
- Countdown timer for OTP expiry  
- Retry limits on OTP generation  
- User-friendly toast notifications  
- Dark mode toggle with theme persistence  
- Name input and personalized welcome page  
- Mobile responsive design  
- Vibration feedback on verification (where supported)  

This project is ideal for beginners looking to understand JavaScript-based OTP flows, UI/UX improvements, and theming.

---

## Demo

You can try the app locally by cloning this repository and opening `index.html` in your browser.

---

## Features

- **OTP Generation**: Generates a random 4-digit OTP displayed on screen.  
- **Timer**: 30-second countdown after OTP generation, with expiration message.  
- **Retry Limit**: Limits OTP requests to 3 attempts before resetting timer.  
- **Name Input**: Collects user name to personalize welcome page.  
- **Dark Mode**: Toggle switch to switch between light and dark themes, saved in localStorage.  
- **Welcome Page**: Shows a personalized welcome message after successful verification.  
- **Mobile Responsive**: Works smoothly on mobile and desktop screens.  
- **Vibration Support**: Provides haptic feedback on OTP verification (if device supports).  

---

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/kanakamsrinath27/otp-verification-app.git
