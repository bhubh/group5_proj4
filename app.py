from sre_parse import State
import numpy as np
from flask import Flask, jsonify, render_template, url_for

#################################################
# Flask Setup
#################################################
app = Flask(__name__,static_url_path="/static")


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return render_template('index.html')

@app.route("/us")
def entire_us():
    return render_template('us.html')

@app.route("/states")
def states():
    return render_template('states.html') 

# @app.route("/api/us_energy")
# def us_energy():
#     with open("./static/js/us_combined.json") as file:
#         data = jason.load(file)
#         return data


# run the app
if __name__ == '__main__':
    app.run(debug=True)  