---
title: Cosmere
description: Cosmere Fake
extends: _layouts.documentation
section: content
---
@php
$🙃 = (new Phony\Phony('en'));
@endphp

@include('_partials._attribute_name_listing', [
    'language'      => 'en',
    'group'         => 'cosmere',
    'attributes'    => [
        'aon',
        'shard_world',
        'shard',
        'surge',
        'knight_radiant',
        'metal',
        'allomancer',
        'feruchemist',
        'herald',
        'spren',
    ],
])

@include('_partials._attribute_listing', [
    'language'      => 'en',
    'group'         => 'cosmere',
    'attributes'    => [
        [
            'name'          => 'aon',
            'description'   => 'Retrieves a random aon from Cosmere Universe.',
        ],
        [
            'name'          => 'shard_world',
            'description'   => 'Retrieves a random shard world from Cosmere Universe.',
        ],
        [
            'name'          => 'shard',
            'description'   => 'Retrieves a random shard from Cosmere Universe.',
        ],
        [
            'name'          => 'surge',
            'description'   => 'Retrieves a random surge from Cosmere Universe.',
        ],
        [
            'name'          => 'knight_radiant',
            'description'   => 'Retrieves a random knight radiant from Cosmere Universe.',
        ],
        [
            'name'          => 'metal',
            'description'   => 'Retrieves a random metal from Cosmere Universe.',
        ],
        [
            'name'          => 'allomancer',
            'description'   => 'Retrieves a random allomancer from Cosmere Universe.',
        ],
        [
            'name'          => 'feruchemist',
            'description'   => 'Retrieves a random feruchemist from Cosmere Universe.',
        ],
        [
            'name'          => 'herald',
            'description'   => 'Retrieves a random herald from Cosmere Universe.',
        ],
        [
            'name'          => 'spren',
            'description'   => 'Retrieves a random spren from Cosmere Universe.',
        ],
    ],
])
