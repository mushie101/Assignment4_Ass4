#!/bin/usr/env python3

import sys
sys.path.append("..")
import pytest
from everything import quiz
def test_getKey():
	assert quiz.getKey("Hello") != None
