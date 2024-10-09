@echo off

start cmd /k "cd .\front_tienda && ng serve --port 4200"
start cmd /k "cd .\back_tienda && php artisan serve"
start cmd /k "cd .\front_admin_tienda && ng serve --port 5200"

