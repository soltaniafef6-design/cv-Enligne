pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Compilation...'
                sh 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                echo 'Tests en cours...'
                sh 'mvn test'
            }
        }
    }
}
