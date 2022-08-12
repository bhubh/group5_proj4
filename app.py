from sre_parse import State
import numpy as np

from flask import Flask, jsonify, render_template

#################################################
# Database Setup
#################################################
# connection_string = "postgres:postgres@localhost:5432/energy_db"
# engine = create_engine(f'postgresql://{connection_string}')

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(engine, reflect=True)

# # Save reference to the table named "energy" in database
# energy = Base.classes.energy

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

# run the app
if __name__ == '__main__':
    app.run(debug=True)  