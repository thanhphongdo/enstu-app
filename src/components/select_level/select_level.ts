import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './select_level.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import {Level} from '../../models/index';
import {GetLevelBySource, SetLevelBySource} from '../../interfaces/index';

@Component({
    name: 'SelectLevel',
    mixins: [template],
    computed: mapGetters(['getLevelBySource']),
    methods: {
        ...mapActions(['setLevelBySource', 'test'])
    }
})
export default class SelectLevel extends Vue {
    @Prop() private msg!: string;

    getLevelBySource!: GetLevelBySource;

    setLevelBySource!: SetLevelBySource;

    test: any;

    mounted(){
        this.setLevelBySource('EoT3y7nabE');
        this.test();
    }

    selectLevel(levelId: string){
        this.$emit('selectLevelAction', {
            levelId: levelId
        })
    }


}
