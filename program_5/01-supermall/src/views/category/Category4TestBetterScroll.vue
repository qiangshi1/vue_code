// 用Category测试better-scroll
<template>
  <div>
    <h2>我是分类</h2>
    <div class="wrapper">
      <ul class="content">
        <li>我是分类1</li>
        <li>我是分类2</li>
        <li>我是分类3</li>
        <li>我是分类4</li>
        <li>我是分类5</li>
        <li>我是分类6</li>
        <li>我是分类7</li>
        <li>我是分类8</li>
        <li>我是分类9</li>
        <li>我是分类10</li>
        <li>我是分类11</li>
        <li>我是分类12</li>
        <li>我是分类13</li>
        <li>我是分类14</li>
        <li>我是分类15</li>
        <li>我是分类16</li>
        <li>我是分类17</li>
        <li>我是分类18</li>
        <li>我是分类19</li>
        <li>我是分类20</li>
        <li>我是分类21</li>
        <li>我是分类22</li>
        <li>我是分类23</li>
        <li>我是分类24</li>
        <li>我是分类25</li>
        <li>我是分类26</li>
        <li>我是分类27</li>
        <li>我是分类28</li>
        <li>我是分类29</li>
        <li>我是分类30</li>
        <li>列表数据31</li>
        <li>列表数据32</li>
        <li>列表数据33</li>
        <li>列表数据34</li>
        <li>列表数据35</li>
        <li>列表数据36</li>
        <li>列表数据37</li>
        <li>列表数据38</li>
        <li>列表数据39</li>
        <li>列表数据40</li>
        <li>列表数据41</li>
        <li>列表数据42</li>
        <li>列表数据43</li>
        <li>列表数据44</li>
        <li>列表数据45</li>
        <li>列表数据46</li>
        <li>列表数据47</li>
        <li>列表数据48</li>
        <li>列表数据49</li>
        <li>列表数据50</li>
        <li>列表数据51</li>
        <li>列表数据52</li>
        <li>列表数据53</li>
        <li>列表数据54</li>
        <li>列表数据55</li>
        <li>列表数据56</li>
        <li>列表数据57</li>
        <li>列表数据58</li>
        <li>列表数据59</li>
        <li>列表数据60</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: "Category",
  components: {},
  data() {
    return {
      bscroll: null,
    }
  },
  mounted() {
    this.bscroll=new BScroll('.wrapper', {
      probeType: 3, 
      pullUpLoad: true,
    });
    this.bscroll.on('scroll', ()=>{
      // console.log(position);
    });
    this.bscroll.on('pullingUp', ()=>{
      console.log("上拉加载更多! ");
      this.bscroll.finishPullUp();
    })
  },
};
</script>

<style scoped>
.wrapper {
      height: 200px;
      background-color: red;
      overflow: hidden;
    }
</style>
