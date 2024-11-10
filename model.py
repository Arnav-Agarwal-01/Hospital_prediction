from flask import Flask, request
import train

app=Flask(__name__)

@app.route('/flask',methods=["POST"])
def index():
    date=request.json['date']
    return train.predict(date)


if __name__=="__main__":
    app.run(port=5000,debug=True)