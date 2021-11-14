from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('main.html')

@app.route('/youareabigwinner')
def correct():
    return render_template("correct.html")

@app.route('/aboutthisamazingproject')
def aboutthisamazingproject():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug=True)