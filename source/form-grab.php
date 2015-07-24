<?php
    require "vendor/autoload.php";
    use Blue\Tools\Api\Client;

    $client = new Client('widget-generator', '16a5024e331bf5ed07606bf31dde455abb26496e', 'https://testenvironment-whichcouk.cp.bsd.net');

    /** @var ResponseInterface $response */
    $response = $client->get('entities/signup_form/131');
    $json = $response->getBody();
    echo $json;
    // $entities = json_decode($json);
    // var_dump($entities);
?>