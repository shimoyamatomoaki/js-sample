<?php

$LOG_FILE = dirname(__FILE__).'/hook.log';
$SECRET_KEY = 'example';

$header = getallheaders();
$post_data = file_get_contents( 'php://input' );
$hmac = hash_hmac('sha1', $post_data, $SECRET_KEY);
if ( isset($header['X-Hub-Signature']) && $header['X-Hub-Signature'] === 'sha1='.$hmac ) {
    $payload = json_decode($post_data, true);  // 受け取ったJSONデータ

    if ($payload['ref'] === 'refs/heads/master') {
        chdir('./html/');
        exec('git pull origin master');
        file_put_contents($LOG_FILE, date("[Y-m-d H:i:s]")." ".$_SERVER['REMOTE_ADDR']." git pulled: ".$payload['head_commit']['message']."\n", FILE_APPEND|LOCK_EX);
    }
} else {
    // 認証失敗
    file_put_contents($LOG_FILE_ERR, date("[Y-m-d H:i:s]")." invalid access: ".$_SERVER['REMOTE_ADDR']."\n", FILE_APPEND|LOCK_EX);
}

// http://qiita.com/oyas/items/1cbdc3e0ac35d4316885
?>
