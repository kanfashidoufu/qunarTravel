<!--
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-02-03 17:56:40
 * @Description: 
-->
<template>
  <div>
    <city-header></city-header>
    <city-search :cities="data.cities"></city-search>
    <city-list
      :cities="data.cities"
      :hot="data.hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="data.cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import { onMounted, reactive, ref } from 'vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  setup() {
    const { letter, handleLetterChange } = useLetterLogic()

    const { data } = useCityLogic()

    return { data, letter, handleLetterChange }
  },
}

function useCityLogic() {
  const data = reactive({
    cities: {},
    hotCities: [],
    letter: '',
  })

  async function getCityInfo() {
    let res = await axios.get(
      'http://rap2api.taobao.org/app/mock/120239/api/city'
    )
    res = res.data
    if (res.ret && res.data) {
      const result = res.data
      data.cities = result.cities
      data.hotCities = result.hotCities
    }
  }

  onMounted(() => {
    getCityInfo()
  })

  return { data }
}

function useLetterLogic() {
  const letter = ref('')
  function handleLetterChange(selected) {
    letter.value = selected
  }
  return { letter, handleLetterChange }
}
</script>

<style lang="stylus" scoped></style>
