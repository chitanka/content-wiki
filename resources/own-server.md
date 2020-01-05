Title: Читанка на собствен сървър

## 1. Преносим пакет

Преносимият пакет е изграден върху [PHP Desktop](https://github.com/cztomczak/phpdesktop) и разполага с вграден сървър и браузър. След като свалите съответния пакет за вашата операционна система, трябва да изтеглите и файла [chitanka-content.zip](https://download.chitanka.info/chitanka-content.torrent) и да разархивирате съдържанието му в директорията `chitanka-content`.

Ограничения:

- В момента не се поддържат бутоните „Напред“ (Forward) и „Назад“ (Back), като единственият начин за връщане една страница назад е чрез контекстното меню.
- Търсачката прави разлика между малки и главни букви, заради това изписвайте точно търсените имена. Пример: Ползвайте „Христо Ботев“ вместо „христо ботев“.

Пишете във [форума](https://forum.chitanka.info/chitanka-standalone-edition-t6309.html), ако имате въпроси или коментари.

### GNU/Linux

- [chitanka-desktop-linux, версия 2020.1a](https://download.chitanka.info/chitanka-desktop-linux-v2020.1a.tgz) — изпълним файл: `chitanka`
- [chitanka-content.zip](https://download.chitanka.info/chitanka-content.torrent)

Можете да обновявате библиотеката си, като изпълнявате файла `update-content`. Изисква се инсталацията на [git](https://en.wikipedia.org/wiki/Git) и [rsync](https://en.wikipedia.org/wiki/Rsync).

Забелязани грешки:

- При Debian Stretch и Buster не работи входът от клавиатурата. Работи се по отстраняването на [тази грешка](https://github.com/cztomczak/phpdesktop/issues/269).


### Windows

- [chitanka-desktop-windows, версия 2020.1b](https://download.chitanka.info/chitanka-desktop-windows-v2020.1b.zip) — изпълним файл: `chitanka.exe`
    - Системни изисквания: Windows 7 или по-нова. Windows XP и Vista **не** се поддържат.
- [chitanka-content.zip](https://download.chitanka.info/chitanka-content.torrent)

Можете да обновявате библиотеката си, като изпълнявате файла `update-content.bat`.

Забелязани грешки:

- **api-ms-win-crt-runtime-l1-1-0.dll missing** — Това се случва на системи, които не са актуализирани. Има два начина да поправите тази грешка:
    1. Обновявате системата си чрез Windows Update. Ако скоро не сте го правили, е възможно да отнеме часове.
    2. Ако не искате да обновите, можете алтернативно да инсталирате [Microsoft Visual C++ 2015 Redistributable Update 3](https://www.microsoft.com/en-us/download/details.aspx?id=53840).
- **rsync: failed to set permissions on "/cygdrive/....": Permission denied (13)** — Ако получите такива съобщения за грешки, пуснете отново обновяването с административни права: десен клавиш, _Пусни като администратор_ (Run as Administrator). 


## 2. Виртуална машина

Виртуална машина на „Моята библиотека“ за VirtualBox. [Повече информация има във форума.](http://forum.chitanka.info/my-library-on-virtual-machine-t3949.html)

- [От 15 ноември 2019 г.](https://github.com/chitanka/sites-files/raw/master/chitanka15112019.torrent)
- [От 17 юли 2019 г.](https://github.com/tonywoolf/chitanka/raw/master/chitanka17.07.2019.torrent)
- [От 6 февруари 2017 г.](https://github.com/chitanka/sites-files/raw/master/chitanka.06.02.2017.torrent)
- [От 1 април 2016 г.](https://github.com/chitanka/sites-files/raw/master/chitanka.01.04.2016.torrent)


## 3. Статична версия

Преди години имаше статична версия на „Моята библиотека“, която не изискваше инсталация на сървър или база от данни. За сметка на това беше ограничена само до HTML. Във форума има [малко повече информация за нея](http://forum.chitanka.info/static-version-t1517.html).
