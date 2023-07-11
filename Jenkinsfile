pipeline {
    agent any
    tools {nodejs "node16"}
    environment {
        NODE_ENV='production'
    }

    stages {
        stage('source') {
            steps {
                git 'https://github.com/vivechanchanny/aws_codebuild_codedeploy_nodeJs_demo.git'
                echo "index.js file content"
                sh 'cat index.js'
            }
        }
        stage('build') {
            environment {
                NODE_ENV = 'staging'
            }
            steps {
                echo "node modules setup"
                echo NODE_ENV
                withCredentials([string(credentialsId: 'aa9386d0-0456-4f6c-88e4-f8f5922acca0', variable: 'sec')]) {
                    // some block
                    echo sec
                }
                sh 'npm install'
            }
        }
        stage("saveArtifact") {
            steps {
                archiveArtifacts artifacts: '**', followSymlinks: false
            }
        }
    }
}
