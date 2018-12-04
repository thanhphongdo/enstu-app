import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { GetSharedData, SetSharedData } from '../../interfaces/index';
@Component({
	name: 'BaseVue',
	computed: mapGetters(['getSharedData']),
	methods: {
		...mapActions(['setSharedData'])
	}
})
export class BaseVue extends Vue {
	public getSharedData!: GetSharedData;
}