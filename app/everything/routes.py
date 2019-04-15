#!/usr/bin/env python3
from flask import Flask, render_template, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from everything import db, app, quiz

@app.route("/")
@app.route("/introduction/")
@app.route("/Introduction/")
def introduction():
	return render_template("introduction.html")

@app.route("/theory/")
@app.route("/Theory/")
def theory():
	return render_template("theory.html")

@app.route("/objective/")
@app.route("/Objective/")
def objective():
	return render_template("objective.html")

@app.route("/experiment/")
@app.route("/Experiment/")
def experiment():
	return render_template("experiment.html")

@app.route("/quizzes/")
@app.route("/Quizzes/")
def quizzes():
	return render_template("quizzes.html")
@app.route("/quizzes/subans", methods = [ "POST" ])
def getQuiz():
	quiz.getQuizAns()
	return render_template("quizAns.html")

@app.route("/procedure/")
@app.route("/Procedure/")
def procedure():
	return render_template("procedure.html")

@app.route("/further_readings/")
@app.route("/Further_Readings/")
def further_readings():
	return render_template("further_readings.html")
