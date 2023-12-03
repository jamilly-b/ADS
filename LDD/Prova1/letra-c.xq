let $xml := <charts>{
    for $chart in (//chart)
      let $continente := $chart/@continent
      let $ultimaData := $chart/dataset[last()]/@date
      let $browsers5 := (
        for $set in (//chart[@continent = $continente]/dataset[last()]/set)
          order by number($set/@value) descending
        return <set browser="{$set/@browser}" value="{$set/@value}"/>
      )[position() le 5]
      order by $continente
    return <chart continent="{$continente}">
      <dataset date="{$ultimaData}">{$browsers5}</dataset>
    </chart>
  }</charts>

return serialize($xml, map{'indent': 'yes', 'method':'xml'})