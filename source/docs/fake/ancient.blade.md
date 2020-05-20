---
title: Ancient
description: Ancient Fake
extends: _layouts.documentation
section: content
---
@php
$🙃 = (new Phonyland\Phony('en'));
@endphp


@include('_partials._attribute_name_listing', [
    'language'      => 'en',
    'group'         => 'ancient',
    'attributes'    => ['god', 'primordial', 'titan', 'hero'],
])

@include('_partials._attribute_listing', [
    'language'      => 'en',
    'group'         => 'ancient',
    'attributes'    => [
        [
            'name'          => 'god',
            'description'   => 'Retrieves a random god from ancient mythology.',
        ],
        [
            'name'          => 'primordial',
            'description'   => 'Retrieves a random primordial from ancient mythology.',
        ],
        [
            'name'          => 'titan',
            'description'   => 'Retrieves a random titan from ancient mythology.',
        ],
        [
            'name'          => 'hero',
            'description'   => 'Retrieves a random hero from ancient mythology.',
        ],
    ],
])