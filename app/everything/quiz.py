#!/usr/bin/env python3
from flask import Flask, render_template, url_for, redirect, request
from flask_sqlalchemy import SQLAlchemy
from everything import db, app

# Back-end for the Quiz database. Form answers from the quizzes page are stored in the database.
class Answers(db.Model):
	ans1 = db.Column(db.Text)
	ans2 = db.Column(db.Text)
	key = db.Column(db.Integer, primary_key=True)

	def __init__(self, ans1, ans2, key):
		self.ans1 = ans1
		self.ans2 = ans2
		self.key = key
	
	def __repr__(self):
		return self.key
	
	pass

# Hash function for unique ID for answer
def getKey(q):
	l = len(q)
	ans = 0
	for i in range(l):
		ans += ord(q[i])*i
	return ans

def getQuizAns ():
	db.create_all()
	q1 = request.form["q1"]
	q2 = request.form["q2"]
	key1 = getKey(q1)
	key2 = getKey(q2)
	key = key1+key2
	new = Answers(q1, q2, key)
	db.session.add(new)
	db.session.commit()
	return render_template("quizAns.html")

