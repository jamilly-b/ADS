let $xml :=
  <results>{
    for $continente in distinct-values(//chart/@continent)
    let $maxChrome := (//chart[@continent = $continente]/dataset[set[@browser='Chrome']/@value > 50.00]/@date)[1]
    where $maxChrome
    order by $continente
    return
      <result date="{$maxChrome}" continent="{$continente}"/>
  }</results>

return serialize($xml, map{'indent': 'yes', 'method':'xml'})