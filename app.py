from flask import Flask, render_template

app = Flask(__name__)

@app.route('/favicon.io')
def favicon():
    app.send_static_file('favicon.ico')

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/correct')
def correct():
    return render_template("correct.html")


if __name__ == "__main__":
    app.run(debug=True)