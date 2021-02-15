<?php 
header('Access-Control-Allow-Origin: *');
// Call the API
$api_url = file_get_contents('http://api.travelbrands.com/interview-test/index.php');

// Convert API data into array
$json = json_decode($api_url, true); 

$result = array();

// Create multidimentional array from nested array
foreach($json as $key => $value){  
     
    $result[$key]['hotelName'] = $value['hotelName'];
    $result[$key]['hotelStarUrl'] = $value['hotelStarUrl'];
    foreach($value['price'] as $k => $v){
        $result[$key]['hotelPrice'] = $value['price']['hotelPrice'];
        
        if(($k == 'hotelPromoPrice') != ""){
            $result[$key]['hotelPromoPrice'] = $value['price']['hotelPromoPrice'];
        }else{
            $result[$key]['hotelPromoPrice'] = "";
        }
        if(($k == 'hotelPromoDescription') != ""){
            $result[$key]['hotelPromoDescription'] = $value['price']['hotelPromoDescription'];
        }else{
            $result[$key]['hotelPromoDescription'] = "";
        }
    }  
}
/* Sort array by hotelPrice*/
usort($result, function($a, $b) {
    return $a['hotelPrice'] > $b['hotelPrice'] ? 1 : -1;
});
/* Convert Array to json */
echo json_encode($result);
?>
