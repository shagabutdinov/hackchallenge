new_repo=$1
new_project_name=$(echo $new_repo | rev | cut -d '/' -f 1 | cut -d '.' -f 2 | rev)
temp_folder_name="_temp"
temp_folder_name_length=$(($(echo $temp_folder_name | wc -m) + 1))

function run_script {
  change_project_name
  change_git_repositiory
  install_dependencies
}

function change_git_repositiory {
  git remote remove origin
  git remote add origin $new_repo
  git add .
  git commit -m "project renamed to $new_project_name"
  git push --set-upstream origin master
}

function install_dependencies {
  npm i
}

function change_project_name {
  create_temp_folders
  replace_project_name
  switch_repository_name
  rewrite_old_files
  remove_temp_folders_and_script
  change_main_folder_name
}

function create_temp_folders {
  mkdir -p "$temp_folder_name/src/app/main"
}

function replace_project_name {
  for file_name in angular.json package.json src/app/main/main.component.html src/index.html; do
    sed "s/abracadabra/$new_project_name/g" < $file_name > "$temp_folder_name/$file_name"
  done
}

function switch_repository_name {
  sed "s/abracadabora_repo/$new_repo/g" < "$temp_folder_name/src/app/main/main.component.html" > "$temp_folder_name/src/app/main/main-temp.component.html"
  mv "$temp_folder_name/src/app/main/main-temp.component.html" "$temp_folder_name/src/app/main/main.component.html"
}

function rewrite_old_files {
  for file_name in "$temp_folder_name/angular.json" "$temp_folder_name/package.json" "$temp_folder_name/src/app/main/main.component.html" "$temp_folder_name/src/index.html"; do
    old_file_name=$(echo $file_name | cut -c $temp_folder_name_length-)
    sed "s/abracadabra/$new_project_name/g" < $file_name > $old_file_name
  done
}

function remove_temp_folders_and_script {
  rm -rf $temp_folder_name $0
}

function change_main_folder_name {
  mv ../template_angular "../$new_project_name"
  cd ..
}

run_script