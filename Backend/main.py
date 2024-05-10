from flask import Flask, redirect, render_template, request, session, url_for, flash, sessions
from flask_login import LoginManager, current_user, login_required, login_user, logout_user, UserMixin


# Initialize Flask application
app = Flask(__name__)
# Secret key required for sessions
app.secret_key = 'richardarannonu07036232511chinem'
