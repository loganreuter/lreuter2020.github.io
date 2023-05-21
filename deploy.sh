git add -A
git commit -m "deployed"
git push origin main

npm run build

cd dist
echo "www.loganreuter.com" >> CNAME
git init -b deploy
git add -A
git commit -m "deployed"
git remote add origin https://github.com/lreuter2020/lreuter2020.github.io.git
git push -f origin deploy
cd -
