@php
    $🙃 = (new Phonyland\Phony('en'));
@endphp

<pre>
<code class="language-php hljs">
use Phonyland\Phony;

$🙃 = new Phony('en');

$🙃->address->city;                 <span class="sm:display md:hidden lg:hidden xl:hidden"><br /></span>// "{{ $🙃->address->city }}"

$🙃->📫->city;                      <span class="sm:display md:hidden lg:hidden xl:hidden"><br /></span>// "{{ $🙃->address->city }}"

$🙃->person->name;                  <span class="sm:display md:hidden lg:hidden xl:hidden"><br /></span>// "{{ $🙃->person->name }}"

$🙃->alphabet->uppercase_letter;    <span class="sm:display md:hidden lg:hidden xl:hidden"><br /></span>// "{{ $🙃->alphabet->uppercase_letter }}"

$🙃->🔤->lowercase_letter;          <span class="sm:display md:hidden lg:hidden xl:hidden"><br /></span>// "{{ $🙃->alphabet->lowercase_letter }}"
</code>
</pre>