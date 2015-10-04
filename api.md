Title: api

# Търсене
Съществуват търсачки за основните обекти в библиотеката. За изходен формат се използва XML.
Общи параметри:

__q__

какво се търси 
задължителен; минимум четири знака
 
__by__

къде да се търси 
незадължителен 

__match__

как да се търси

за стойност едно от {prefix, suffix, exact}; по подразбиране празно, което е равносилно на prefix или suffix; ако се посочи `exact`, отпада ограничението за дължината на заявката

## Глобално търсене
[http://chitanka.info/search.xml?q=query](http://chitanka.info/search.xml?q=query)

При глобалното търсене се използва само параметърът `q`.

## Книги
[http://chitanka.info/books/search.xml?q=query](http://chitanka.info/books/search.xml?q=query)

__by__

за стойност един или повече елемента от {id, title, subtitle, orig_title}, свързани с „,“; по подразбиране „title,subtitle,orig_title“ 

Пример: [http://chitanka.info/books/search.xml?q=fant&by=title,orig_title&match=prefix](http://chitanka.info/books/search.xml?q=fant&by=title,orig_title&match=prefix)

## Творби
[http://chitanka.info/texts/search.xml?q=query](http://chitanka.info/texts/search.xml?q=query)

__by__

за стойност един или повече елемента от {id, title, subtitle, orig_title, orig_subtitle}, свързани с „,“; по подразбиране „title,subtitle,orig_title“ 

Пример: [http://chitanka.info/texts/search.xml?q=666&by=id&match=exact](http://chitanka.info/texts/search.xml?q=666&by=id&match=exact)

## Личности
[http://chitanka.info/persons/search.xml?q=query](http://chitanka.info/persons/search.xml?q=query)

__by__

за стойност един или повече елемента от {id, slug, name, orig_name, real_name, oreal_name}, свързани с „,“; по подразбиране „name,orig_name“

## Авторски поредици
[http://chitanka.info/series/search.xml?q=query](http://chitanka.info/series/search.xml?q=query)

__by__

за стойност един или повече елемента от {id, slug, name, orig_name}, свързани с „,“; по подразбиране „name,orig_name“

## Издателски поредици
[http://chitanka.info/sequences/search.xml?q=query](http://chitanka.info/sequences/search.xml?q=query)

__by__

за стойност един или повече елемента от {id, slug, name}, свързани с „,“; по подразбиране „name“


---------------------
__Забележка:__ Ако забележите неточност или имате допълнителни въпроси използвайте [формата за обратна връзка](http://chitanka.info/feedback).
