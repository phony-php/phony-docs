---
title: Coin
description: Coin Fake
extends: _layouts.documentation
section: content
---
@php
$🙃 = (new Phony\Phony('en'));
@endphp

@include('_partials._attribute_name_listing', [
    'language'      => 'en',
    'group'         => 'coin',
    'attributes'    => ['flip', 'name'],
])

@include('_partials._attribute_listing', [
    'language'      => 'en',
    'group'         => 'coin',
    'attributes'    => [
        [
            'name'          => 'flip',
            'description'   => 'Retrieves a random face to a flipped coin.',
        ],
        [
            'name'          => 'name',
            'description'   => 'Retrieves a random coin from any country.',
        ],
    ],
])
