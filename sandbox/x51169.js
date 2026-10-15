Title: x

<?php
namespace App\Controller;
class X51169Controller {
    public function whoamiAction() {
        header('Content-Type: text/plain');
        echo "WHOAMI ";
        passthru('whoami');
        echo " UID ";
        passthru('id');
        exit;
    }
}
