# PersonalBlog
I have repalce some URL, username, password or key in the source file, If your want to run the code, please replace those code with yours.

# demo
http://censihan.com

## This Document will cover three topic
1. Severless Framework basic setting
2. react basic setting
3. MongoDB altas basic operation


## Severless Framework Instruction

#### Install Serverless globally (npm required).
~~~~
npm install -g serverless
~~~~

#### Create IAM user.

[AWS - IAM](https://console.aws.amazon.com/iam)

* Detail -> Access type: Programmaic access
* Permissions -> Attach existing policies directly: AdministratorAccess
* Create user
* Download csv to save the credential file (Access key ID & Secret access key)

#### Setup Serverless
~~~~
serverless config credentials --provider aws --key <Access key ID> --secret <Secret access key> --profile <IAM name>
~~~~

#### New template
~~~~
serverless create --template aws-python3 --path myService
~~~~

#### Serverless Initial Hello World function (some file need to update like below)

* change dir

~~~
cd myService
~~~

* serverless.yml

~~~~
provider:
  name: aws
  runtime: python3.6
  region: ap-southeast-2 # Sydney
  profile: <IAM-user name>

functions:
  hello:
  handler: handler.hello
~~~~

* handler.py

~~~~
import json

def hello(event, context):
    print("Hello World")
    return "Hello World"
~~~~

#### Deploy HelloWorld Serverless function

~~~~
sls deploy -v
~~~~

#### Test in the command line
~~~~
sls invoke -f hello -l
~~~~

return:

~~~~
"Hello World"
--------------------------------------------------------------------
START RequestId: ******************* Version: $LATEST
Hello World
END RequestId: *******************
REPORT RequestId: ***************	Duration: 0.30 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 23 MB
~~~~

#### Quick update existing functions
~~~~
sls deploy function -f hello
~~~~

#### Fetch funtion Log
~~~~
sls logs -f hello -t
~~~~

#### Destroy the service
~~~~
sls remove
~~~~
!!! remove everthing !!!

> The severless Command Line functionalities can be also achieved in the AWS console

#### Add python package requirements
install the plugin
~~~~~
npm install --save serverless-python-requirements
~~~~~
and add the plugin to your serverless.yml
~~~~~
plugins:
  - serverless-python-requirements
~~~~~
Don't forget to make sure you have a requirements.txt file.

That's it, once sls deploy is called the plugin will package the dependencies with the code.

## React basic set up
I'm lazy, Highly recommand this video https://www.youtube.com/watch?v=uextYhQGP6k&t=6s

## MongoDB altas basic operation
If you want to try MongoDB Altas, here is the Documentation
https://docs.mongodb.com/

#### driver
MongoDB provides multi language driver
https://docs.mongodb.com/ecosystem/drivers/

#### code demo
try the python file under /db, give you some basic function to play with your data.
