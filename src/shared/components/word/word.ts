import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './word.vue';
import { Word } from '../../../models/index';
declare var Swiper: any;
@Component({
    name: 'Word',
    mixins: [template]
})
export default class WordCompenent extends Vue {
    @Prop() private word!: Word;

    mounted() {
        console.log(this.word);
    }
}
