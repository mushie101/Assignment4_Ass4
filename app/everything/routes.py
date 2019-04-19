#!/usr/bin/env python3
from flask import Flask, render_template, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from everything import db, app, quiz

@app.route("/")
@app.route("/introduction/")
@app.route("/Introduction/")
def introduction():
	'''Loads the Introduction page'''
	return render_template("introduction.html")

@app.route("/theory/")
@app.route("/Theory/")
def theory():
	'''Loads the Theory page'''
	return render_template("theory.html")

@app.route("/objective/")
@app.route("/Objective/")
def objective():
	'''Loads the Objective page'''
	return render_template("objective.html")

@app.route("/experiment/")
@app.route("/Experiment/")
def experiment():
	'''Loads the Experiment page'''
	return render_template("experiment.html")

@app.route("/quizzes/")
@app.route("/Quizzes/")
def quizzes():
	'''Loads the Quizzes page'''
	return render_template("quizzes.html")
@app.route("/quizzes/subans", methods = [ "POST" ])
def getQuiz():
	'''Gets the answers submitted for the quizzes'''
	quiz.getQuizAns()
	return render_template("quizAns.html")

@app.route("/procedure/")
@app.route("/Procedure/")
def procedure():
	'''Loads the Procedure page'''
	return render_template("procedure.html")

@app.route("/further_readings/")
@app.route("/Further_Readings/")
def further_readings():
	'''Loads the Further Readings page'''
	return render_template("further_readings.html")
