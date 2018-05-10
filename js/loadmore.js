let parent = document.querySelector('.row'),
    items  = parent.querySelectorAll('.col-sm-12'),
    loadMoreBtn =  document.querySelector('#loadmore'),
    maxItems = 6,
    hiddenClass = "visually-hidden",
    totalItems = items.length;

  [].forEach.call(items, function(item, idx){
      if (idx > maxItems - 1) {
          item.classList.add(hiddenClass);
          loadMoreBtn.innerHTML = `Charger ${totalItems-maxItems} autres articles`
      }
  });

  loadMoreBtn.addEventListener('click', function(){

    [].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx){
        console.log(item);
        if (idx < maxItems - 1) {
            item.classList.remove(hiddenClass);
        }

        if ( document.querySelectorAll('.' + hiddenClass).length === 0) {
            loadMoreBtn.innerHTML = "Rien à charger !"
            loadMoreBtn.style.backgroundColor = "white"
            loadMoreBtn.style.color = "black"
            loadMoreBtn.style.border = "1px solid black"
            loadMoreBtn.style.cursor = "default"
        }

    });

  });
