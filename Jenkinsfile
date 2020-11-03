#!/usr/bin/env groovy

@Library("com.optum.jenkins.pipeline.library@v0.1.33") _

String imageTag = "image-$BRANCH_NAME-$BUILD_NUMBER".toLowerCase()
String containerName = "container-$BRANCH_NAME-$BUILD_NUMBER".toLowerCase()

pipeline {
  agent { label 'docker-maven-slave' }

  options {
    ansiColor('xterm')
  }

  environment {
    NPMRC_FILENAME = credentials('jsteel24-npmrc')
  }

  stages {
    stage('Build') {
      steps {
        //sh "cp $NPMRC_FILENAME .npmrc"
        sh "docker build -f Dockerfile-build -t $imageTag ."
      }
    }

    /*
    stage('Test') {
      steps {
        sh "docker run $imageTag bin/test"
      }
    }
    */

    stage('Build website image') {
      when {
        branch 'PR-1' // 'master'
      }
      steps {
        sh "docker run -d --name $containerName $imageTag sleep 60"

        sh "docker cp -a $containerName:storybook-static storybook-static"

        withCredentials([[
          $class: 'UsernamePasswordMultiBinding',
          credentialsId: 'cdsplatform_1',
          usernameVariable: 'DOCKER_USERNAME',
          passwordVariable: 'DOCKER_PASSWORD'
        ]]) {
          sh "LOGIN=1 bin/docker-build-www"
        }
      }
    }

    stage('Deploy: helm') {
      when {
        branch 'PR-1' //'master'
      }
      steps {
        withCredentials([string(credentialsId: 'k8s_token', variable: 'SECRET')]) {
          // This is needed so we can run Helm 3. For more info see
          // https://github.optum.com/jenkins/docker_build_agents/tree/master/mixins/jenkins_mixin_helm
          sh ". /etc/profile.d/jenkins.sh && SECRET=$SECRET LOGIN=1 bin/deploy-www"
        }
      }
    }
  }

  post {
    always {
      script {
        try {
            sh "docker rm -f $containerName"
        } catch (Exception e) {
          // TODO: catch only "Error: No such container"
        }
      }
    }
  }
}
