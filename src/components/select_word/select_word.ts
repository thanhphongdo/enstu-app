import { Component, Prop, Vue } from 'vue-property-decorator'
import template from './select_word.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { Word } from '../../models/index'
import Carousel from '@/shared/components/carousel/carousel.ts'
import WordComponent from '@/shared/components/word/word.ts'

@Component({
  name: 'SelectWord',
  components: {
    Carousel,
    WordComponent
  },
  mixins: [template],
  computed: mapGetters([]),
  methods: {
    ...mapActions([])
  }
})
export default class SelectWord extends Vue {
    @Prop() private words!: Array<Word>;
}
