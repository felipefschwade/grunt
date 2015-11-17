npm init -> npm install grunt --save-dev -> npm install grunt-cli -g ->


Para iniciar o grunt:
module.exports = function(grunt){
    grunt.initConfig({
        plugin1: {config},
        plugin2: {config}
    });
}
Para carregar outras NPms : 
Para utilizar a task e a target no terminal: grunt task:target
Utilizando o Copy:
    module.exports = function(grunt){
    grunt.initConfig({
        copy:{
            pasta:{
                expand: true,
                cwd: 'pasta',
                src: '**', //** indica todos
                dest: 'dist'
            }
        },
        clean{
            dist:{
                src: 'dist'
            }
        }
    });
        grunt.loadNpmTasks('grunt-contri-copy');
Utilizando o Clean:
        module.exports = function(grunt){
            grunt.initConfig({
                copy:{
                    pasta:{
                        expand: true,
                        cwd: 'pasta',
                        src: '**', //** indica todos
                        dest: 'dist'
                    }
                }
            });
                grunt.loadNpmTasks('grunt-contrib-copy');
                grunt.loadNpmTasks('grunt-contrib-clean');
            
Para adicioanr uma nova task: grunt.registerTask('nome' , ['nometaskconfigurada', 'nometaskconfigurada']);
Execução: grunt task;
Para adicionar uma task ao default: grunt.registerTask('default', ['task']);
Execução: grunt;