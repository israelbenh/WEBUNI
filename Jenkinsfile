pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Aqui você pode adicionar os comandos de construção específicos do Windows
                // Por exemplo:
                bat 'npm install' // Instala as dependências do projeto usando o comando 'npm' do Windows
                bat 'npm run build' // Executa o processo de construção usando o comando 'npm' do Windows
            }
        }
    }
}
