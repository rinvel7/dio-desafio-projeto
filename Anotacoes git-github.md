Fecha: 25/12
Hora: 5hr

#GIT/GITHUB

##GIT

Software de versionamiento de codigo, cria, monitorea as diferentes versiones de un cogigo

##Comandos Basicos Terminal:

###WINDWOS                                          LINUX
cd          ---->   Navegar entre pastas    <----   cd
dir         ---->   Listar pastas           <----   ls
mkdir       ---->   Criar pastas            <----   mkdir
del/rmdir   ---->   Apagar arquivo          <----   rm -rf
cls         ---->   limpar tela             <----   clear
echo        ---->   Cria arquivo            <----   echo
mv          ---->   Move arquivo p/pasta    <----   mv

#                           OBJETOS INTERNOS DE GIT     
###     BLOBS                       TREES                   COMMITS
        Cria un SHA(secure Hash     Almacena e apunta os    Apunta para tree-
        Algorithm) um conunto       diferentes tipos de     parente-autor-msj-
        de 40 caracteres            BLOBS. Arma tuda a      timestamps. E unico
        Contiene os metadados de    estrutura onde se       para cada autor.
        git.                        ubican os arquivos.

##  COMANDOS PRINCIPALES DE GIT
    git init            ----> inicia git em um arquivo
    git add             ----> Adiciona un arquivo
    git commit          ----> commita un arquivo
    git status          ----> monitorea os estados de um arquivo

##              CICLO DE VIDA DOS ARQUIVOS NO GIT

       GIT INIT
       TRACKED ----> arquivo que GIT nao conhece
        
UNTRACKED               UNMODIFIED              MODIFIED            STAGE

Add arquivo--------------------------------------------------------->

                        Edita arquivo----------->

                                                Stage Arquivo------->

         <--------------Remove arquivo

                                  <---------------------------Commit


##                       AMBIENTE DE DESENVOLVIMIENTO


###                                                         SERVIDOR
                                                            REMOTE REPOSITORY
                                                                                                                                                         
###         AREA DE DESEMVOLVIMIENTO LOCAL
            
            WORKING                  STAGING                LOCAL
            DIRECTORY                AREA                   REPOSITORY
                                                    
