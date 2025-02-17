echo cc
ng build --output-path docs --base-href /Portofolio/
mv docs/brower docs/
rm docs/browser
git status
git add docs/
git status
git commit -m "deploy(docs): update github page"
git push origin main