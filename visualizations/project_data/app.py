# # dependencies
# from flask import Flask, render_template
# import sqlite3
# import jsonify


# # connect to db
# conn = sqlite3.connect('imf_data.sql')
# # use routes to filter out certain data
# @app.route("/global_data")
# def global_data():


#     global = SELECT * FROM imf_data
#     return jsonify(global=global)
#     # return render_template("index.html")
# app = Flask(__name__)


# # create a home route
# # @app.route("/")
# # # create function for home route
# # def imf_data():
# #     return render_template('index.html')


# if __name__ == '__main__':
#     app.run(debug=True)
# dependencies
# from flask import Flask, render_template, jsonify
# import sqlite3
# import json


# app = Flask(__name__)

# # connect to db
# conn = sqlite3.connect('imf_data.db')

# # use routes to filter out certain data
# @app.route("/global_data")
# def global_data():
#     cursor = conn.cursor()
#     cursor.execute("SELECT Countries FROM imf_data")
#     global_data = cursor.fetchone()[0]
#     cursor.close()
#     return jsonify(global_data=global_data)


# # create a home route
# @app.route("/")
# def home():
#     return render_template('index.html')


# if __name__ == '__main__':
#     app.run(debug=True)

# dependencies
from flask import Flask, render_template, jsonify, g
import sqlite3
import json


app = Flask(__name__)

# define database name
DATABASE = 'imf_data.sql'

# connect to db
def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(DATABASE)
    return g.db

# close database connection after request is complete
@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'db'):
        g.db.close()

# use routes to filter out certain data
@app.route("/global_data")
def global_data():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM imf_data")
    global_data = cursor.fetchone()[0]
    cursor.close()
    return jsonify(global_data=global_data)


# create a home route
@app.route("/")
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)