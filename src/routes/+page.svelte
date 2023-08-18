<script>
    import {toReactElement} from "$lib/toReactElement";


    const jsx = toReactElement(`<div class="cool">Hello world</div>
    <style>
	    .cool {
	    color: red;
    }
    </style>`)

    console.log(jsx);
</script>
