import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
<h3>Comentarios de lo que sea</h3>
<img src="https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-jumbo-v2.jpg?quality=75&auto=webp" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias corrupti quidem nesciunt quam quaerat, ut nostrum soluta dolorem architecto eaque nobis autem cum obcaecati dolore eveniet recusandae enim ea.</p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }
  `
})
export class CommentsComponent {

}
