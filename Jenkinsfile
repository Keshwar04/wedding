pipeline {
    agent any
    environment {
        AWS_REGION = 'ap-south-1'
    }
    stages {
        stage('Git Checkout') {
            steps {
                git url: 'https://github.com/Keshwar04/wedding.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy to S3') {
            steps {
                withCredentials([
                    string(credentialsId: 'aws-access-key', variable: 'AWS_ACCESS_KEY_ID'),
                    string(credentialsId: 'aws-secret-key', variable: 'AWS_SECRET_ACCESS_KEY')
                ]) {
                    sh 'aws s3 sync dist/ s3://wedding-react-app --delete --region $AWS_REGION'
                }
            }
        }
    }
}
