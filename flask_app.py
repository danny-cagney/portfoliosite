
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/project1")
def project1():
    return render_template("project1.html")

@app.route("/project2")
def index():
    return render_template("project2.html")

@app.route("/project3")
def index():
    return render_template("project3.html")

@app.route("/project4")
def index():
    return render_template("project4.html")